import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('653baae6ee7964f092de'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
