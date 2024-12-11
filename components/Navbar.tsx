"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./DarkModeButton";
import { Menu, X } from "lucide-react";
import { SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import AnimationContainer from "@/components/global/animation-container";

const Navbar = () => {
  const { user } = useUser();

  const isSignIn = user;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-background relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">
          <AnimationContainer delay={0.1}>
            <Link href={"/"} className="p-2 font-medium">
              SaaS
            </Link>
          </AnimationContainer>

          <div className="md:hidden z-50">
            <AnimationContainer delay={0.2}>
              <button
                className="p-2"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <X className="size-6" />
                ) : (
                  <Menu className="size-6" />
                )}
              </button>
            </AnimationContainer>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isSignIn ? (
              <>
                <AnimationContainer delay={0.3}>
                  {isSignIn ? (
                    <>
                      <Link href={"#"} className="p-2 font-medium">
                        Product
                      </Link>
                      <Link href={"#"} className="p-2 font-medium">
                        Profile
                      </Link>
                    </>
                  ) : null}

                  <Link href={"#"} className="p-2 font-medium">
                    Pricing
                  </Link>
                </AnimationContainer>
                <AnimationContainer delay={0.4}>
                  <div className="space-y-4 sm:space-y-0 flex flex-col sm:flex-row items-center gap-2">
                    <ModeToggle />

                    <UserButton />
                  </div>
                </AnimationContainer>
              </>
            ) : (
              <>
                <AnimationContainer delay={0.3}>
                  <Link href={"#"} className="p-2 font-medium">
                    Pricing
                  </Link>
                </AnimationContainer>

                <AnimationContainer delay={0.4}>
                  <div className="space-y-4 sm:space-y-0 flex flex-col sm:flex-row items-center gap-2">
                    <ModeToggle />

                    <SignedOut>
                      <SignInButton />
                    </SignedOut>
                  </div>
                </AnimationContainer>
              </>
            )}

            {/* <AnimationContainer delay={0.3}>
              {isSignIn ? (
                <>
                  <Link href={"#"} className="p-2 font-medium">
                    Product
                  </Link>
                  <Link href={"#"} className="p-2 font-medium">
                    Profile
                  </Link>
                </>
              ) : null}

              <Link href={"#"} className="p-2 font-medium">
                Pricing
              </Link>
            </AnimationContainer>

            <AnimationContainer delay={0.4}>
              <div className="space-y-4 sm:space-y-0 flex flex-col sm:flex-row items-center gap-2">
                <ModeToggle />

                {isSignIn ? (
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                ) : (
                  <SignedIn>
                    <SignOutButton />
                  </SignedIn>
                )}
              </div>
            </AnimationContainer> */}
          </div>
        </div>

        <div
          className={`md:hidden fixed inset-0 z-40 ${
            isOpen ? "" : "pointer-events-none"
          }`}
        >
          <div
            className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className={`absolute top-16 left-0 right-0 bg-background border-b border-border/40 shadow-lg transition-all duration-300 ease-in-out 
            ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }
            `}
          >
            <AnimationContainer delay={0.2}>
              <div className="px-4 pt-2 pb-3 space-y-1 flex flex-col">
                {isSignIn ? (
                  <>
                    <Link href={"#"} className="p-2 font-medium">
                      Product
                    </Link>
                    <Link href={"#"} className="p-2 font-medium">
                      Profile
                    </Link>
                  </>
                ) : null}
                <Link href={"#"} className="p-2 font-medium">
                  Pricing
                </Link>

                <div className="flex items-center gap-4 pt-2">
                  <ModeToggle />

                  <SignedOut>
                    <SignInButton />
                  </SignedOut>

                  <UserButton />
                </div>
              </div>
            </AnimationContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
