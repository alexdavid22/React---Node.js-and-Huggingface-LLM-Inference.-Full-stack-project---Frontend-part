# Full Stack AI Project

This is a full stack application that interacts with an AI model to generate responses based on predefined templates as specified by the company requirements. The project is fully operational and can be tested online.

## Live Demo

The project is available online and can be tested at the following link:
[Live Demo](https://lambent-stardust-6805e1.netlify.app/)

To use the application, simply visit the link, enter your request in the form, and click send. The AI will respond according to the predefined template.

## Project Overview

- The application is in English, and the AI model responds in English due to limitations in the open-source models, which are not as powerful in languages other than English.
- The AI's responses are always formatted according to the specified template from the company examples.

## How to Run the Project

No dependencies need to be installed, as the project is complete and ready for use. Simply visit the live demo link provided above.

## AI Model Training Steps

### Training Details

- The AI model was initially trained using Llama3. During training, it was observed that the model cannot communicate effectively in Romanian.
- For the web application, a new model, Mistral, was used. This model was context fine-tuned, meaning it was provided memory context to know how to formulate the answer.

### Resources

- **Initial Hugging Face Model:** [Llama 3 8B Instruct BNB 4Bit Veziv Test](https://huggingface.co/AlSaRobotics/llama-3-8b-Instruct-bnb-4bit-veziv-test)
- **Current Model:** Mistral (context fine-tuned for inference API)
- **Dataset:** [Finetuning Demo](https://huggingface.co/datasets/AlSaRobotics/finetuning_demo)
- **Google Drive:** [Training Video](https://drive.google.com/file/d/1CEx_TnzAlTMEGqqq5O2QXKoz8fPOUjW8/view?usp=sharing) (Jupyter Notebook code for initial training through 10 epochs)

## Project Structure

- **Front-end:** Developed with modern JavaScript frameworks for responsive and dynamic user interaction.
- **Back-end:** Node.js used for server-side operations, API management, and database interactions.
- **AI Model:** Integrated with the application to process user inputs and generate appropriate responses based on the training data and predefined templates.
