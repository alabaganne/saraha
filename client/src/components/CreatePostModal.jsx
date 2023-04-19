import React, { useState } from "react";
import api from "../api";

const CreatePostModal = ({ showModal, setShowModal, getPosts }) => {
    const [text, setText] = useState("");

    function submit(e) {
        e.preventDefault();

        api.post("/posts", {
            text: text,
            userId: 2,
        }).then(function (res) {
            getPosts();

            setText("");
            setShowModal(false);
        });
    }

    return (
        <div className="overlay-container">
            <div className="bg-white r w-2/3 rounded-xl p-6">
                <h2 className="text-2xl font-bold">Create Post</h2>
                <form onSubmit={submit}>
                    <textarea
                        name="post"
                        id="post"
                        cols="30"
                        rows="10"
                        className="border rounded-lg p-4 focus:outline-none mt-6 w-full resize-none"
                        placeholder="Write something here..."
                        value={text}
                        onChange={function (e) {
                            setText(e.target.value);
                        }}
                    ></textarea>
                    <div className="mt-4 flex justify-end">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="px-5 py-2 border rounded-lg mr-2 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 px-5 py-2 text-white rounded-lg hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePostModal;
