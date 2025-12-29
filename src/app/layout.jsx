export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <main className="flex-1 p-4">{children}</main>
        </div>
    )
}