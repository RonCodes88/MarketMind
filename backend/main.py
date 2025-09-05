from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from datetime import datetime
import os
import json
from dotenv import load_dotenv
from groq import Groq

from schemas import (
    ProductRequest,
    SloganResponse,
    CampaignMessage,
    CampaignMessagesResponse,
    SocialMediaPost,
    SocialMediaPostsResponse,
    MarketingResponse,
    HealthResponse
)

# Load environment variables
load_dotenv()

# Initialize Groq client
client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

app = FastAPI(
    title="MarketMind API",
    description="AI-powered marketing content generation API",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],  # Frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint
@app.get("/")
async def root():
    return {
        "message": "Welcome to MarketMind API",
        "version": "1.0.0",
        "docs": "/docs"
    }

# Health check endpoint
@app.get("/health", response_model=HealthResponse)
async def health_check():
    return HealthResponse(
        status="healthy",
        message="MarketMind API is running successfully",
        timestamp=datetime.now()
    )

# Generate slogans endpoint
@app.post("/api/generate/slogans", response_model=SloganResponse)
async def generate_slogans(request: ProductRequest):
    """Generate catchy slogans for a product"""
    try:
        slogans = generate_product_slogans(request.product_name)
        return SloganResponse(slogans=slogans)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating slogans: {str(e)}")

# Generate campaign messages endpoint
@app.post("/api/generate/campaign-messages", response_model=CampaignMessagesResponse)
async def generate_campaign_messages(request: ProductRequest):
    """Generate campaign messages for a product"""
    try:
        messages = generate_product_campaign_messages(request.product_name)
        return CampaignMessagesResponse(messages=messages)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating campaign messages: {str(e)}")

# Generate social media posts endpoint
@app.post("/api/generate/social-posts", response_model=SocialMediaPostsResponse)
async def generate_social_media_posts(request: ProductRequest):
    """Generate social media posts for a product"""
    try:
        posts = generate_product_social_posts(request.product_name)
        return SocialMediaPostsResponse(posts=posts)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating social media posts: {str(e)}")

# Generate all marketing content endpoint
@app.post("/api/generate/marketing-content", response_model=MarketingResponse)
async def generate_marketing_content(request: ProductRequest):
    """Generate complete marketing content package for a product"""
    try:
        slogans = generate_product_slogans(request.product_name)
        messages = generate_product_campaign_messages(request.product_name)
        posts = generate_product_social_posts(request.product_name)
        
        return MarketingResponse(
            product_name=request.product_name,
            slogans=slogans,
            campaign_messages=messages,
            social_media_posts=posts,
            generated_at=datetime.now()
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating marketing content: {str(e)}")

# Helper functions for content generation
def generate_product_slogans(product_name: str) -> list[str]:
    """Generate slogans for a product using Groq AI"""
    try:
        prompt = f"""Generate 5 catchy, memorable slogans for a product called "{product_name}". 
        Each slogan should be:
        - Under 10 words
        - Memorable and catchy
        - Highlight key benefits or emotions
        - Suitable for marketing campaigns
        
        Return only a JSON array of strings, no other text."""
        
        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",  # High quality model
            messages=[{"role": "user", "content": prompt}],
            temperature=0.8,
            max_tokens=200
        )
        
        content = response.choices[0].message.content
        slogans = json.loads(content)
        return slogans
    except Exception as e:
        print(f"Groq API error for slogans: {e}")
        # Fallback to placeholder content
        return [
            f"{product_name} - Revolutionizing Your Experience",
            f"The Future is Here with {product_name}",
            f"{product_name}: Where Innovation Meets Excellence",
            f"Transform Your Life with {product_name}",
            f"{product_name} - Simply Better, Simply Smarter"
        ]

def generate_product_campaign_messages(product_name: str) -> list[CampaignMessage]:
    """Generate campaign messages for a product using Groq AI"""
    try:
        prompt = f"""Generate 5 compelling campaign messages for a product called "{product_name}". 
        Each message should have a title and content following these themes:
        1. Problem-Solution Focus
        2. Social Proof
        3. Emotional Appeal  
        4. Urgency & Scarcity
        5. Value Proposition
        
        Return as JSON array with objects containing "title" and "message" fields.
        Each message should be 2-3 sentences, persuasive and marketing-focused.
        
        Example format:
        [
            {{"title": "Problem-Solution Focus", "message": "Your message here..."}},
            {{"title": "Social Proof", "message": "Your message here..."}}
        ]"""
        
        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
            max_tokens=800
        )
        
        content = response.choices[0].message.content
        messages_data = json.loads(content)
        return [CampaignMessage(**msg) for msg in messages_data]
    except Exception as e:
        print(f"Groq API error for campaign messages: {e}")
        # Fallback to placeholder content
        return [
            CampaignMessage(
                title="Problem-Solution Focus",
                message=f"Tired of outdated solutions? {product_name} brings cutting-edge technology to solve your everyday challenges. Experience the difference innovation makes."
            ),
            CampaignMessage(
                title="Social Proof",
                message=f"Join thousands of satisfied customers who have already discovered the power of {product_name}. Don't get left behind – be part of the revolution."
            ),
            CampaignMessage(
                title="Emotional Appeal",
                message=f"Imagine a world where your daily tasks become effortless. {product_name} doesn't just promise change – it delivers transformation that you'll feel from day one."
            ),
            CampaignMessage(
                title="Urgency & Scarcity",
                message=f"Limited time offer: Be among the first to experience {product_name}. Early adopters get exclusive benefits and priority support. Act now before it's too late."
            ),
            CampaignMessage(
                title="Value Proposition",
                message=f"Why settle for ordinary when you can have extraordinary? {product_name} combines premium quality with unbeatable value, giving you more for less."
            )
        ]

def generate_product_social_posts(product_name: str) -> list[SocialMediaPost]:
    """Generate social media posts for a product using Groq AI"""
    try:
        prompt = f"""Generate 5 social media posts for a product called "{product_name}" across different platforms:
        
        Create posts for: Instagram, Twitter/X, LinkedIn, TikTok, Facebook
        
        Each post should:
        - Be platform-appropriate (length, style, hashtags)
        - Include relevant emojis and hashtags
        - Have engaging, shareable content
        - Match the platform's typical content style
        
        Return as JSON array with "platform", "post", and "type" fields.
        
        Example format:
        [
            {{"platform": "Instagram", "post": "Your Instagram post here...", "type": "Visual Story"}},
            {{"platform": "Twitter/X", "post": "Your Twitter post here...", "type": "Viral Tweet"}}
        ]"""
        
        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.8,
            max_tokens=1000
        )
        
        content = response.choices[0].message.content
        posts_data = json.loads(content)
        return [SocialMediaPost(**post) for post in posts_data]
    except Exception as e:
        print(f"Groq API error for social posts: {e}")
        # Fallback to placeholder content
        product_hashtag = product_name.replace(" ", "").replace("-", "")
        return [
            SocialMediaPost(
                platform="Instagram",
                post=f"✨ Meet {product_name} - the game-changer you've been waiting for! 🚀\n\nSwipe to see how it's transforming lives daily 👉\n\n#{product_hashtag} #Innovation #GameChanger #TechLife",
                type="Visual Story"
            ),
            SocialMediaPost(
                platform="Twitter/X",
                post=f"🔥 Hot take: {product_name} is about to change everything.\n\nWhat took hours now takes minutes. What seemed impossible is now effortless.\n\nThe future is here. 🚀\n\n#{product_hashtag} #ProductLaunch",
                type="Viral Tweet"
            ),
            SocialMediaPost(
                platform="LinkedIn",
                post=f"I've been testing {product_name} for the past month, and the results speak for themselves.\n\n• 3x faster workflow\n• 50% less manual work\n• Seamless integration\n\nThis isn't just another product—it's a paradigm shift.\n\nWhat productivity challenges are you facing that {product_name} could solve?\n\n#ProductivityHack #Innovation #{product_hashtag}",
                type="Professional Insight"
            ),
            SocialMediaPost(
                platform="TikTok",
                post=f"POV: You discover {product_name} and your life gets 10x easier 😱\n\n*Shows before vs after scenarios*\n\nWait for the plot twist at the end! 🤯\n\n#{product_hashtag}Check #LifeHack #ProductReview #GameChanger",
                type="Viral Video"
            ),
            SocialMediaPost(
                platform="Facebook",
                post=f"🎯 Calling all [target audience]!\n\nTired of [common pain point]? {product_name} has your back!\n\n✅ Easy to use\n✅ Proven results\n✅ Money-back guarantee\n\nOver 1,000 happy customers can't be wrong. Join the {product_name} family today!\n\n👇 Comment 'INTERESTED' for early access",
                type="Community Engagement"
            )
        ]

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)