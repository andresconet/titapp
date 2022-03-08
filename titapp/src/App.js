import { useQuery, gql } from '@apollo/client';

const COMMETS_BY_USER = gql`
    {
        commentsByUser(userId: "ayCTeEVLIWD1EXfwJ5cZ", limit: 10, page: 1) {
            data {
                id
                message
                publishDate
                owner {
                    id
                    firstName
                    lastName
                }
            }
            total
            page
            limit
            offset
        }
    }
`;

export const App = (userID="ayCTeEVLIWD1EXfwJ5cZ") => {
    const { loading, error, data } = useQuery(COMMETS_BY_USER);
    if (loading) return <h2>Cargando...</h2>;
    if (error) return <p>Error :(</p>;
    // const { allOrders } = data;

    return (
        <>
            {console.log(data)}
        </>
    );
};
