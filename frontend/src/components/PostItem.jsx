function PostItem({ post, onDelete }) {
  return (
    <article className="card p-6 flex flex-col h-full group hover:translate-y-[-4px] transition-all duration-300">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-4 leading-relaxed text-sm">
          {post.body}
        </p>
      </div>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this post?")) {
              onDelete(post.id);
            }
          }}
          className="btn-danger-glow w-full flex items-center justify-center"
        >
          🗑️ Delete
        </button>
      </div>
    </article>
  );
}

export default PostItem;
