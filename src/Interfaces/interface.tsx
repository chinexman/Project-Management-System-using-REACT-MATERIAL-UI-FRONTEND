export interface ProjectInterface {
  owner: string;
  name: string;
  collaborators: { email: string; isVerified: boolean };
  createdAt: string;
  updatedAt: string;
  _id: string;
}

export interface TeamInterface {
  name: string;
}

export interface TaskInterface {
  title: String;
  description: String;
  status: String;
  owner: String;
  assignee: String;
  fileUploads: String[];
  comments: String[];
  dueDate: Date;
  createdAt: Date;
  projectId: String;
  tag: String;
}
