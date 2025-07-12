import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function HelloWorld() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">
            Hello World! 👋
          </CardTitle>
          <CardDescription className="text-lg">
            Welcome to your Next.js-style project with TypeScript and Tailwind CSS
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center space-y-3">
            <p className="text-muted-foreground">
              This is a basic React component built with:
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Vite</Badge>
            </div>

            <div className="pt-4">
              <Button 
                onClick={() => alert('Hello from your component!')}
                className="w-full"
              >
                Click me!
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}