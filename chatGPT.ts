import { chatModels, chatGPTOptions } from "./constants";
import { OpenAI } from "openai"



export class chatGPT {
    // Initialize private variables.
    private apiKey: string;
    private model: chatModels;
    private systemContent?: string;
    private userContent?: string;
    private systemRole?: string;
    private userRole?: string;
    client: OpenAI;

    /**
     * @param options - The options for the ChatGPT instance.
    */
   constructor(options: chatGPTOptions) {
        this.apiKey = options.apiKey; // The API Key to use for the instance.
        this.model = options.model;
        this.systemContent = options.systemContent;
        this.systemRole = options.systemRole;
        this.userRole = options.userRole;

        this.client = new OpenAI({
            apiKey: this.apiKey
        });
   }

   async sendMessage(message: string): Promise<string | null> {
      const autocomplete = await this.client.chat.completions.create({
        model: this.model,
        messages: [
          { role: "system", content: this.systemContent ?? "You are a helpful assistant." },
          { role: "user", content: message }
        ]
      });
      

      return autocomplete.choices[0].message?.content ?? null;
   }



}
