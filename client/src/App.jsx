import axios from "axios";
import { useEffect, useState } from "react";
import { FiPlusCircle, FiMessageCircle } from "react-icons/fi";
import CreatePostModal from "./components/CreatePostModal";
import Post from "./components/Post";

function App() {
    const [showModal, setShowModal] = useState(false);
    const [posts, setPosts] = useState([]);

    function getPosts() {
        axios({
            method: "get",
            url: "http://localhost:3000/posts",
        }).then(function (res) {
            setPosts(res.data);
        });
    }

    useEffect(function () {
        getPosts();
    }, []);

    return (
        <div>
            <div>
                <div className="max-w-3xl px-8 py-12 mx-auto">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold">Posts</h1>
                        <div className="flex-shrink-0">
                            <button
                                onClick={() => setShowModal(true)}
                                className="bg-blue-500 text-white px-8 py-3 rounded-lg flex justify-center items-center"
                            >
                                <FiPlusCircle className="h-5 w-5 mr-2" />
                                <span>Share a post</span>
                            </button>
                        </div>
                    </div>
                    <div className="w-full">
                        {posts.map((post) => (
                            <Post key={post.id} id={post.id} text={post.text} />
                        ))}
                    </div>
                </div>
            </div>
            {showModal && (
                <CreatePostModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    getPosts={getPosts}
                />
            )}
        </div>
    );
}

export default App;
