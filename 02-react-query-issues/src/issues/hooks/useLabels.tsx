import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Label } from "../interfaces";
import { sleep } from '../helpers';

const getLabels = async ():Promise<Label[]> => {

    await sleep(2);

    const { data } = await githubApi.get<Label[]>('/labels?per_page=100', {
        headers: {
            Authorization: null,
        }
    });
    return data;
}

export const useLabels = () => {
      
    const labelsQuery = useQuery(
        ['lables'],
        getLabels,
        {
            staleTime: 1000 * 60 * 60, //! un segundo * 60 segundos * 60 minutos,
            // initialData: [],
            placeholderData: [
                {
                    id: 69105383,
                    node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
                    url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
                    name: "Browser: IE",
                    color: "c7def8",
                    default: false,
                },{
                    id: 717031390,
                    node_id: "MDU6TGFiZWw3MTcwMzEzOTA=",
                    url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue",
                    name: "good first issue",
                    color: "6ce26a",
                    default: true,
                },{
                    id: 127893911,
                    node_id: "MDU6TGFiZWwxMjc4OTM5MTE=",
                    url: "https://api.github.com/repos/facebook/react/labels/Component:%20DOM",
                    name: "Component: DOM",
                    color: "fef2c0",
                    default: false,
                }
            ]
        }
    );

    return {
        labelsQuery,
    }
}
