import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TestCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <Card className="w-96 bg-gray-900 border border-gray-800 p-4 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Test Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Questa è una card di test.</p>
        </CardContent>
      </Card>
    </div>
  );
}
