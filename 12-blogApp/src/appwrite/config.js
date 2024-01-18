import conf from "../conf/conf";
import { Client, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteBucketId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost() :: ", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts() :: ", error);
      return false;
    }
  }
}

// Init SDK
// const client = new Client();

// const databases = new Databases(client);

// client
//   .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
//   .setProject("5df5acd0d48c2") // Your project ID
//   .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key
