export type ProfessionalProfile = {
  businessName: string;
  mainService: string;
  experienceYears: number;
  workAreas: string[];
  bio: string;
  jobPreferences: string[];
  isProfileActive: boolean;
  rating: number;
};

export type CustomerProfile = {
  name: string;
  email: string;
  password: string;
};

type User = {
  _id: string;
  name: string;
  email: string;
  role: "customer" | "professional";
  isLoggedIn: boolean;
  profilePicture?: string;
  phone: string;

  // professional profile
  professionalProfile: ProfessionalProfile;
};

export type AuthStoreType = {
  // states
  user: User | null;
  auth: boolean;

  // functions
  login: (body: { email: string; password: string }) => Promise<User>;
  register: (body: ProfessionalProfile | CustomerProfile) => Promise<User>;
  getProfile: () => Promise<User>;
  logout: () => void;

  // other
  isLoading: boolean;
  error: string | null;
};
