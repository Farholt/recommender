/* Lib */
import cx from 'classnames';
import { useEffect, useState } from 'react';

const Index = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [users, setUsers] = useState([]); // get users
    const [target, setTarget] = useState(0); // target user
    const [sim, setSim] = useState(0); // chosen similarity

    const [euclidean, setEuclidean] = useState([]) // recommendations
    const [pearson, setPearson] = useState([]) // recommendations

    const fetchUsers = async () => {
        await fetch('/api/users')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUsers(result);
                    setTarget(result[0].id); // first user as default
                }
            )
    }

    const fetchStats = async (id: number) => {
        await fetch(`/api/sim/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setEuclidean([
                        {
                            matching_users: result[0]['top_matching_users'][0]['euclidean'],
                            matching_movies: result[0]['recommended_movies'][0]['euclidean']
                        },
                    ])
                    setPearson([
                        {
                            matching_users: result[0]['top_matching_users'][1]['pearson_correlation'],
                            matching_movies: result[0]['recommended_movies'][1]['pearson_correlation']
                        },
                    ])
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    const handleUserChange = (e: any) => {
        setTarget(parseInt(e.target.value));
    }

    const handleSimChange = (e: any) => {
        setSim(parseInt(e.target.value));
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    useEffect(() => {
        target != 0 ? fetchStats(target) : null;
    }, [target])

    let simList = [{ value: 1, description: 'Euclidean' }, { value: 2, description: 'Pearson Colleration' }];

    return (
        <div className={cx(['container'], ['m-5'])}>
            <div className={cx(['row'], ['mb-3'])}>
                <div className={cx(['col-sm'])}>
                    <select className="custom-select" onChange={handleUserChange}>
                        {users && users.map((u: any, i: number) => <option value={u.id} key={i}>{u.id}: {u.name}</option>)}
                    </select>
                </div>
                <div className={cx(['col-sm'])} onChange={handleSimChange}>
                    <select className="custom-select">
                        {simList && simList.map((sim: any, i: number) => <option value={i} key={i}>{sim.description}</option>)}
                    </select>
                </div>
            </div>
            <div className={cx(['row'])}>
                <div className={cx(['col-sm'])}>
                    <h1 className={cx(['mt-3'], ['mb-3'])}>Movie Recommendations ({sim == 0 ? "Euclidean" : "Pearson Colleration"})</h1>
                    <table className={cx(['table'])}>
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Score</th>
                            </tr>
                        </thead>    
                        <tbody>
                            {/* Euclidean */}
                            {
                                sim == 0 && euclidean && euclidean.map((euc: any, i: number) =>
                                    euc['matching_movies'].map((movies: any, j: number) =>
                                    {
                                        return <tr key={j}>
                                            <th scope={'row'}>{movies['id']}</th>
                                            <td>{movies['title']}</td>
                                            <td>{movies['score'].toFixed(4)}</td>
                                        </tr>
                                    }
                                    )
                                )
                            }
                            {/* Pearson */}
                            {
                                sim == 1 && pearson && pearson.map((euc: any, i: number) =>
                                    euc['matching_movies'].map((movies: any, j: number) =>
                                    {
                                        return <tr key={j}>
                                            <th scope={'row'}>{movies['id']}</th>
                                            <td>{movies['title']}</td>
                                            <td>{movies['score'].toFixed(4)}</td>
                                        </tr>
                                    }
                                    )
                                )
                            }
                        </tbody>
                        <h2 className={cx(['mt-3'], ['mb-3'])}>Top Matching Users ({sim == 0 ? "Euclidean" : "Pearson Colleration"})</h2>
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">User</th>
                            <th scope="col">Score</th>
                            </tr>
                        </thead>    
                        <tbody>
                            {/* Euclidean */}
                            {
                                sim == 0 && euclidean && euclidean.map((euc: any, i: number) =>
                                    euc['matching_users'].map((movies: any, j: number) =>
                                    {
                                        return <tr key={j}>
                                            <th scope={'row'}>{movies['id']}</th>
                                            <td>{movies['user_name']}</td>
                                            <td>{movies['euclideanScore'].toFixed(4)}</td>
                                        </tr>
                                    }
                                    )
                                )
                            }
                            {/* Pearson */}
                            {
                                sim == 1 && pearson && pearson.map((euc: any, i: number) =>
                                    euc['matching_users'].map((movies: any, j: number) =>
                                    {
                                        return <tr key={j}>
                                            <th scope={'row'}>{movies['id']}</th>
                                            <td>{movies['user_name']}</td>
                                            <td>{movies['pearsonScore'].toFixed(4)}</td>
                                        </tr>
                                    }
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default Index;