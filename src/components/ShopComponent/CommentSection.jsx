
import PropTypes from "prop-types";
import { FaRegCircleUser } from "react-icons/fa6";

const CommentSection = ({ comments }) => {
    const user = true

    function getTimeAgo(dateString) {
        const commentDate = new Date(dateString);
        const currentDate = new Date();
        const timeDifference = currentDate - commentDate;

        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) return `${days} দিন ${days > 1 ? "" : ""} আগে`;
        if (hours > 0) return `${hours} ঘণ্টা ${hours > 1 ? "" : ""} আগে`;
        if (minutes > 0) return `${minutes} মিনিট ${minutes > 1 ? "" : ""} আগে`;
        return `${seconds} সেকেন্ড ${seconds > 1 ? "s" : ""} আগে`;
    }

    const handleComment = async (e) => {
        e.preventDefault()
        const comment = e.target.comment.value;
        console.log(comment);

    }

    return (
        <div className=" h-full">
            <div className="">
                <form
                    onSubmit={handleComment}
                    className="flex gap-2 flex-col justify-end items-end bg-slate-200 rounded-sm p-2"
                >
                    <textarea
                        className="w-full bg-transparent rounded-sm"
                        placeholder="Write Your Comment...."
                        name="comment"
                        rows={2}
                    ></textarea>

                    <button
                        disabled={!user}
                        className={`btn btn-sm bg-primary text-black hover:bg-yellow-400 rounded-sm border-none ${!user ? 'cursor-not-allowed bg-opacity-50 hover:bg-opacity-50 text-opacity-50' : ''
                            }`}
                    >
                        Comment
                    </button>
                </form>

            </div>
            {comments?.map((comment, i) => (
                <div className=" my-3" key={comment.userEmail + i}>
                    <div className=" flex gap-4 items-center my-4 ">
                        <p className="text-lg flex items-center gap-2"><FaRegCircleUser /> {comment?.user}</p>
                        <p className=" text-gray-700 text-sm">
                            {getTimeAgo(comment?.date)}
                        </p>

                    </div>
                    <p className="mx-4">{comment?.text}</p>
                </div>
            ))}
        </div>

    );
};

CommentSection.propTypes = {
    comments: PropTypes.array

}

export default CommentSection;