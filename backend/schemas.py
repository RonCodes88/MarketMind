from pydantic import BaseModel
from datetime import datetime


class ProductRequest(BaseModel):
    product_name: str
    description: str = ""
    target_audience: str = ""
    industry: str = ""


class SloganResponse(BaseModel):
    slogans: list[str]


class CampaignMessage(BaseModel):
    title: str
    message: str


class CampaignMessagesResponse(BaseModel):
    messages: list[CampaignMessage]


class SocialMediaPost(BaseModel):
    platform: str
    post: str
    type: str


class SocialMediaPostsResponse(BaseModel):
    posts: list[SocialMediaPost]


class MarketingResponse(BaseModel):
    product_name: str
    slogans: list[str]
    campaign_messages: list[CampaignMessage]
    social_media_posts: list[SocialMediaPost]
    generated_at: datetime


class HealthResponse(BaseModel):
    status: str
    message: str
    timestamp: datetime
