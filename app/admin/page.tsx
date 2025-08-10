import { Card, CardContent } from "@/components/ui/card"

export default async function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Contribution Dashboard</h1>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Google Forms Integration</h2>
              <p className="text-gray-300 mb-4">Contributions are being submitted directly to your Google Form.</p>
              <div className="text-left max-w-2xl mx-auto space-y-2 text-sm text-gray-400">
                <p>
                  <strong>To view submissions:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Go to your Google Form</li>
                  <li>Click the "Responses" tab</li>
                  <li>View individual responses or create a Google Sheet</li>
                  <li>Click "Create Spreadsheet" to export all data to Google Sheets</li>
                </ol>
                <p className="mt-4">
                  <strong>Your Google Form URL:</strong>
                  <br />
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdZMJz-6WnURsC3QBg0AVnB2BvOd4_L8Y-PkpYsHeIJhE8SHw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline break-all"
                  >
                    View Form & Responses
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
