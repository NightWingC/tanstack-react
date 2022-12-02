import axios from "axios";

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    },
})