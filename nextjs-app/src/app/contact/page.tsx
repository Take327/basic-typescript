// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-lg">
      <h1 className="text-2xl font-bold">お問い合わせ</h1>
      <form className="mt-4">
        <label className="block mb-2">
          名前:
          <input type="text" className="w-full p-2 border rounded" />
        </label>
        <label className="block mb-2">
          メッセージ:
          <textarea className="w-full p-2 border rounded"></textarea>
        </label>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
        >
          送信
        </button>
      </form>
    </div>
  );
}
