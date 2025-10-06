/* eslint-disable react/prop-types */

export default function PostItem({ post }) {
  return (
    <div>
      {/* Image */}
      <div className="aspect-video overflow-hidden rounded-sm bg-gray-100">
        <img
          src={post.imgUrl}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}

      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
        {post.content}
      </p>

      {/* Actions */}
      <div className="flex gap-3"></div>
    </div>
  );
}
