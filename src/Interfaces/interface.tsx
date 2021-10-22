export interface ProjectInterface {
  owner: string;
  name: string;
  collaborators: { email: string; isVerified: boolean };
  createdAt: string;
  updatedAt: string;
}

export interface TeamInterface {
  name: string;
}
