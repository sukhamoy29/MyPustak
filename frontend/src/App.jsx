import { useEffect, useState } from "react";
import { getPosts, createPost, deletePost } from "./api";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await getPosts();
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreate = async (data) => {
    await createPost(data);
    fetchPosts();
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    fetchPosts();
  };

  if (loading)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="mb-6">
            <div className="inline-block">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-500"></div>
            </div>
          </div>
          <p className="text-gray-600 font-semibold text-lg">
            🚀 Loading posts...
          </p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-50 shadow-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            📝Welcome to MyPustak
          </h1>
          <p className="text-gray-500 mt-2 ml-15">
            {" "}
            -This is your Mini Blog Manager{" "}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Create Post Section */}
        <div className="mb-12">
          <PostForm onCreate={handleCreate} />
        </div>

        {/* Posts List Section */}
        <div>
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <p className="text-gray-600 text-lg font-medium">
                No posts yet. Create your first post above! 👆
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-blue-500 mr-3">✨</span>
                Your Posts{" "}
                <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-lg font-semibold">
                  {posts.length}
                </span>
              </h2>
              <PostList posts={posts} onDelete={handleDelete} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
