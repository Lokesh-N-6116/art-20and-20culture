export interface Seller {
  id: string;
  name: string;
  avatar: string;
  state: string;
  totalSales: number;
  isVerified: boolean;
  joinedDate: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  category: string;
  artform: string;
  state: string;
  seller: Seller;
  inStock: boolean;
  exportReady: boolean;
  specifications: {
    dimensions: string;
    weight: string;
    materials: string[];
    technique: string;
  };
  culturalSignificance: string;
  tags: string[];
}

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Warli Tribal Art Painting",
    description: "Authentic Warli tribal art painting depicting village life scenes. Hand-painted by tribal artists from Maharashtra using traditional rice paste on handmade paper. This ancient art form dates back to 2500 BCE and represents the harmony between humans and nature.",
    price: 2500,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    ],
    category: "Paintings",
    artform: "Warli",
    state: "Maharashtra",
    seller: {
      id: "seller1",
      name: "Meera Warli",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      state: "Maharashtra",
      totalSales: 47,
      isVerified: true,
      joinedDate: "2022-03-15"
    },
    inStock: true,
    exportReady: true,
    specifications: {
      dimensions: "30cm x 40cm",
      weight: "200g",
      materials: ["Handmade paper", "Natural rice paste", "Natural pigments"],
      technique: "Hand-painted with bamboo sticks"
    },
    culturalSignificance: "Warli paintings are a traditional art form of the Warli tribe from Maharashtra, depicting their daily life, festivals, and relationship with nature.",
    tags: ["tribal", "traditional", "Maharashtra", "handmade", "export-ready"]
  },
  {
    id: "2",
    name: "Pithora Folk Painting",
    description: "Sacred Pithora painting from Gujarat featuring vibrant colors and intricate patterns. Created by Rathwa tribal artists, these paintings are traditionally made on the walls of houses during auspicious occasions and festivals.",
    price: 3200,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop"
    ],
    category: "Paintings",
    artform: "Pithora",
    state: "Gujarat",
    seller: {
      id: "seller2",
      name: "Kiran Rathwa",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      state: "Gujarat",
      totalSales: 23,
      isVerified: true,
      joinedDate: "2021-11-08"
    },
    inStock: true,
    exportReady: true,
    specifications: {
      dimensions: "45cm x 60cm",
      weight: "350g",
      materials: ["Canvas", "Natural pigments", "Organic colors"],
      technique: "Traditional brush painting"
    },
    culturalSignificance: "Pithora is a ritualistic art form of the Rathwa tribe, believed to bring prosperity and good luck to the household.",
    tags: ["tribal", "Gujarat", "sacred art", "colorful", "export-ready"]
  },
  {
    id: "3",
    name: "Madhubani Wedding Scene",
    description: "Exquisite Madhubani painting depicting a traditional wedding ceremony. Created using natural dyes and pigments on handmade paper by skilled artists from Bihar. This art form is characterized by complex geometrical patterns and vibrant colors.",
    price: 4500,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    ],
    category: "Paintings",
    artform: "Madhubani",
    state: "Bihar",
    seller: {
      id: "seller3",
      name: "Sunita Devi",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      state: "Bihar",
      totalSales: 156,
      isVerified: true,
      joinedDate: "2020-07-22"
    },
    inStock: true,
    exportReady: true,
    specifications: {
      dimensions: "50cm x 70cm",
      weight: "300g",
      materials: ["Handmade paper", "Natural dyes", "Traditional brushes"],
      technique: "Fine brush work with geometric patterns"
    },
    culturalSignificance: "Madhubani art originated in the Mithila region and is traditionally practiced by women to decorate walls during festivals and important occasions.",
    tags: ["Madhubani", "Bihar", "wedding", "geometric", "export-ready"]
  },
  {
    id: "4",
    name: "Rajasthani Miniature Painting",
    description: "Delicate miniature painting from Rajasthan showcasing the royal lifestyle of maharajas. Hand-painted on old paper with natural pigments and gold leaf detailing, representing the rich heritage of Rajasthani court art.",
    price: 6800,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1580902394687-c7956e5fa366?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1580902394687-c7956e5fa366?w=400&h=300&fit=crop"
    ],
    category: "Paintings",
    artform: "Miniature",
    state: "Rajasthan",
    seller: {
      id: "seller4",
      name: "Ravi Sharma",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      state: "Rajasthan",
      totalSales: 89,
      isVerified: true,
      joinedDate: "2021-01-12"
    },
    inStock: true,
    exportReady: true,
    specifications: {
      dimensions: "20cm x 25cm",
      weight: "150g",
      materials: ["Handmade paper", "Natural pigments", "Gold leaf", "Precious stones"],
      technique: "Fine brush work with gold detailing"
    },
    culturalSignificance: "Rajasthani miniature paintings developed in the royal courts and are known for their intricate details and vibrant colors depicting court life and mythology.",
    tags: ["Rajasthan", "miniature", "royal", "gold leaf", "export-ready"]
  },
  {
    id: "5",
    name: "Kerala Mural Art Panel",
    description: "Traditional Kerala mural art panel featuring Hindu deities painted in the classical style. Created using natural pigments and following ancient techniques passed down through generations of Kerala artists.",
    price: 8500,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop"
    ],
    category: "Paintings",
    artform: "Mural",
    state: "Kerala",
    seller: {
      id: "seller5",
      name: "Anand Nair",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
      state: "Kerala",
      totalSales: 34,
      isVerified: true,
      joinedDate: "2022-09-03"
    },
    inStock: true,
    exportReady: true,
    specifications: {
      dimensions: "60cm x 80cm",
      weight: "800g",
      materials: ["Wood panel", "Natural pigments", "Traditional brushes"],
      technique: "Traditional mural painting technique"
    },
    culturalSignificance: "Kerala mural paintings are characterized by their spiritual themes and are traditionally found in temples and palaces across Kerala.",
    tags: ["Kerala", "mural", "spiritual", "traditional", "export-ready"]
  },
  {
    id: "6",
    name: "Bengali Kantha Embroidery",
    description: "Beautiful Kantha embroidered textile from West Bengal featuring traditional motifs and running stitch work. This sustainable art form transforms old sarees into beautiful quilts and decorative pieces.",
    price: 3800,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop"
    ],
    category: "Textiles",
    artform: "Kantha",
    state: "West Bengal",
    seller: {
      id: "seller6",
      name: "Priya Chakraborty",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      state: "West Bengal",
      totalSales: 67,
      isVerified: true,
      joinedDate: "2021-06-18"
    },
    inStock: true,
    exportReady: true,
    specifications: {
      dimensions: "120cm x 150cm",
      weight: "600g",
      materials: ["Cotton sarees", "Cotton thread", "Natural dyes"],
      technique: "Traditional running stitch embroidery"
    },
    culturalSignificance: "Kantha is a traditional form of embroidery from Bengal, representing the rural women's creativity and their ability to create beauty from everyday materials.",
    tags: ["West Bengal", "embroidery", "sustainable", "textile", "export-ready"]
  }
];
