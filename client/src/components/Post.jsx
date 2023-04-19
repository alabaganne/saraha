import React, { useState } from "react";
import { FiPlusCircle, FiMessageCircle, FiHeart } from "react-icons/fi";

function Post({ id, text }) {
    const [showComments, setShowComments] = useState(false);

    function like() {
        alert("like");
    }

    return (
        <div className="mt-6">
            {/* post details */}
            <div className="bg-blue-50 p-4 border border-blue-500 rounded-lg">
                <span>{text}</span>
                <div className="mt-4 flex justify-end space-x-2">
                    <button
                        className="flex items-center text-blue-500 hover:text-white rounded-lg px-3 py-2 hover:bg-blue-500 text-sm"
                        onClick={() => setShowComments(!showComments)}
                    >
                        <FiMessageCircle className="h-5 w-5 mr-2" />
                        {showComments ? "Hide" : "Show"} Comments
                    </button>
                    <button
                        className="flex items-center text-red-500 hover:text-white rounded-lg px-3 py-2 hover:bg-red-500 text-sm"
                        onClick={like}
                    >
                        <FiHeart className="h-5 w-5 mr-2" />
                        <span>10 Likes</span>
                    </button>
                </div>
            </div>
            {/* commetns */}
            {showComments && (
                <div className="mt-4 space-y-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 bg-gray-800 rounded-full"></div>
                            <span>Ala Baganné</span>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 bg-gray-800 rounded-full"></div>
                            <span>Ala Baganné</span>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Post;
