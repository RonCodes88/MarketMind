// API client for MarketMind backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8002';
console.log('API_BASE_URL:', API_BASE_URL);

// API Response Types (matching backend schemas)
export interface ProductRequest {
  product_name: string;
  description?: string;
  target_audience?: string;
  industry?: string;
}

export interface SloganResponse {
  slogans: string[];
}

export interface CampaignMessage {
  title: string;
  message: string;
}

export interface CampaignMessagesResponse {
  messages: CampaignMessage[];
}

export interface SocialMediaPost {
  platform: string;
  post: string;
  type: string;
}

export interface SocialMediaPostsResponse {
  posts: SocialMediaPost[];
}

export interface MarketingResponse {
  product_name: string;
  slogans: string[];
  campaign_messages: CampaignMessage[];
  social_media_posts: SocialMediaPost[];
  generated_at: string;
}

export interface HealthResponse {
  status: string;
  message: string;
  timestamp: string;
}

// API Client Class
class MarketMindAPI {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers: defaultHeaders,
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Health check endpoint
  async healthCheck(): Promise<HealthResponse> {
    return this.makeRequest<HealthResponse>('/health');
  }

  // Generate slogans
  async generateSlogans(request: ProductRequest): Promise<SloganResponse> {
    return this.makeRequest<SloganResponse>('/api/generate/slogans', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  // Generate campaign messages
  async generateCampaignMessages(request: ProductRequest): Promise<CampaignMessagesResponse> {
    return this.makeRequest<CampaignMessagesResponse>('/api/generate/campaign-messages', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  // Generate social media posts
  async generateSocialPosts(request: ProductRequest): Promise<SocialMediaPostsResponse> {
    return this.makeRequest<SocialMediaPostsResponse>('/api/generate/social-posts', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  // Generate complete marketing content
  async generateMarketingContent(request: ProductRequest): Promise<MarketingResponse> {
    return this.makeRequest<MarketingResponse>('/api/generate/marketing-content', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  // Check if backend is available
  async isBackendAvailable(): Promise<boolean> {
    try {
      await this.healthCheck();
      return true;
    } catch (error) {
      console.warn('Backend health check failed:', error);
      return false;
    }
  }
}

// Export singleton instance
export const api = new MarketMindAPI();

// Export individual functions properly bound to the API instance
export const healthCheck = () => api.healthCheck();
export const generateSlogans = (request: ProductRequest) => api.generateSlogans(request);
export const generateCampaignMessages = (request: ProductRequest) => api.generateCampaignMessages(request);
export const generateSocialPosts = (request: ProductRequest) => api.generateSocialPosts(request);
export const generateMarketingContent = (request: ProductRequest) => api.generateMarketingContent(request);
export const isBackendAvailable = () => api.isBackendAvailable();