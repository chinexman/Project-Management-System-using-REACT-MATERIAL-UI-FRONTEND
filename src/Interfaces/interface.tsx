export interface ProjectInterface {
  owner: string;
  name: string;
  collaborators: { email: string; isVerified: boolean };
  createdAt: string;
  updatedAt: string;
  _id: string;
}

export interface TeamInterface {
  teamName: string;
  _id: string;
}

interface User {
  fullname: String;
  profileImage: String;
}

export interface CommentInterface {
  commenter: User;
  body: String;
  createdAt: Date;
}

export interface TaskInterface {
  _id?: string;
  title: String;
  description: String;
  status: String;
  owner: User;
  assignee: User;
  fileUploads: String[];
  comments: CommentInterface[];
  dueDate: Date;
  createdAt: Date;
  projectId: String;
  tag: String;
}
