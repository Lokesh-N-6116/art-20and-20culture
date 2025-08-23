import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Mail, Lock, User, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmailAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email authentication
    console.log("Email auth:", { email, password, name, isSignUp });
  };

  const handleGoogleAuth = () => {
    // TODO: Implement Google OAuth
    console.log("Google auth");
  };

  const handleFacebookAuth = () => {
    // TODO: Implement Facebook OAuth
    console.log("Facebook auth");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-purple-900 via-luxury-purple-800 to-luxury-purple-700">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Header */}
      <div className="relative z-10 p-6">
        <Link
          to="/"
          className="inline-flex items-center text-luxury-gold-400 hover:text-luxury-gold-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to SP Collections
        </Link>
      </div>

      {/* Auth Form */}
      <div className="relative z-10 flex items-center justify-center px-6 py-12">
        <Card className="w-full max-w-md border-luxury-silver-300 bg-card/90 backdrop-blur-md">
          <CardHeader className="space-y-1 text-center">
            <div className="mb-4">
              <h1 className="font-samarkan text-depth text-3xl text-luxury-gold-600">
                SP Collections
              </h1>
              <p className="text-sm text-muted-foreground">
                Traditional Indian Artforms
              </p>
            </div>
            <CardTitle className="text-2xl font-semibold">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </CardTitle>
            <CardDescription>
              {isSignUp
                ? "Join our community of art enthusiasts and traditional craftsmen"
                : "Sign in to your account to continue shopping"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Social Auth Buttons */}
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full border-luxury-silver-300 hover:bg-luxury-silver-50"
                onClick={handleGoogleAuth}
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              <Button
                variant="outline"
                className="w-full border-luxury-silver-300 hover:bg-luxury-silver-50"
                onClick={handleFacebookAuth}
              >
                <Facebook className="w-4 h-4 mr-2" />
                Continue with Facebook
              </Button>
            </div>

            <div className="relative">
              <Separator className="my-4" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                Or continue with email
              </span>
            </div>

            {/* Email Auth Form */}
            <form onSubmit={handleEmailAuth} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10"
                      required={isSignUp}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-luxury-gold-500 hover:bg-luxury-gold-600 text-luxury-purple-900 font-semibold"
              >
                {isSignUp ? "Create Account" : "Sign In"}
              </Button>
            </form>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}
              </span>{" "}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-luxury-purple-600 hover:text-luxury-purple-700 font-medium underline"
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </button>
            </div>

            {!isSignUp && (
              <div className="text-center">
                <button className="text-sm text-luxury-purple-600 hover:text-luxury-purple-700 underline">
                  Forgot your password?
                </button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
