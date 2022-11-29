import axios from "axios";

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    },
})