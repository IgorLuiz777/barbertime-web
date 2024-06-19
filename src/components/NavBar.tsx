"use client"
import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, Link, Button, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { MouseEventHandler } from "react";
import { getBarbeariaToken } from "@/app/actions/barbearia/get-by-token";
import { LogOut } from "lucide-react";
import { logOut } from "@/app/actions/barbearia/logout";

//   const fetchData = async () => {

//     const barbearia: Barbearia[] = await getBarbeariaToken();
  
//     return { barbearia };
//   };

export default function NavBar() {
    // const { barbearia } = await fetchData();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const checkAuth = () => {
            const cookies = document.cookie.split(';').reduce<Record<string, string>>((acc, cookie) => {
                const [name, value] = cookie.trim().split('=');
                acc[name] = value;
                return acc;
            }, {});

            setIsAuthenticated(!!cookies.accessToken);
        };

        checkAuth();
    }, []);

    // const handleOpenProfile: MouseEventHandler = (event) => {
    //     return fetchData
    // }

    const handleLogoutClick: MouseEventHandler = async () => {

      try {
          await logOut(); 
      } catch (error) {
          console.error('Failed to logOut:', error);
      }
  };

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-black text-xl">Barber<span className="text-cerulean-blue-700 font-bold">Time</span></p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-black text-xl">Barber<span className="text-cerulean-blue-700 font-bold">Time</span></p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
                {isAuthenticated ? (
                    <Dropdown>
                        <DropdownTrigger>
                            <Link className="cursor-pointer">
                                <Avatar showFallback src='https://example.com/path-to-image.jpg' />
                            </Link>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Menu de Ações">
                            <DropdownItem key="profile">Abrir Perfil</DropdownItem>
                            <DropdownItem key="edit">Editar Perfil</DropdownItem>
                            <DropdownItem
                                key="logout"
                                className="text-danger"
                                color="danger"
                                onClick={handleLogoutClick}
                            >
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                
                ) : (
                    <Link href="/"><Button color="primary">Logar</Button></Link>
                )}
            </NavbarContent>
        </Navbar>
    );
};

