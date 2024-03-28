import { MediaConvertClient, GetJobTemplateCommand } from "@aws-sdk/client-mediaconvert";

export const handler = async (event) => {
    const { MEDIA_CONVERT_ENDPOINT, MEDIA_CONVERT_JOB_TEMPLATE_NAME } = process.env;

    const client = new MediaConvertClient({
        endpoint: MEDIA_CONVERT_ENDPOINT,
    });
    const input = {
        Name: MEDIA_CONVERT_JOB_TEMPLATE_NAME,
    };
    const command = new GetJobTemplateCommand(input);
    const response = await client.send(command);
    return response;
};