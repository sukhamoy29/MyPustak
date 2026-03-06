import { useState } from "react";

function PostForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      alert("Please fill in both title and content");
      return;
    }

    setIsSubmitting(true);
    try {
      await onCreate({ title, body });
      setTitle("");
      setBody("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-8 border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <span className="mr-3 text-2xl">✨</span> Create New Post
      </h2>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Title
        </label>
        <input
          type="text"
          placeholder="Enter post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
          disabled={isSubmitting}
        />
      </div>

      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Content
        </label>
        <textarea
          placeholder="Write your post content here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="input-field resize-none h-32"
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary-glow w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin mr-2">⏳</span>
            Publishing...
          </>
        ) : (
          <>
            <span className="mr-2">🚀</span>
            Publish Post
          </>
        )}
      </button>
    </form>
  );
}

export default PostForm;
