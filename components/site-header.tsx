'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Sprout, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { PracticeAction } from '@/components/practice-action'
import { navigation } from '@/lib/practice'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <div className="flex min-h-8 items-center justify-center gap-2 bg-muted px-4 py-1.5 text-center text-base leading-relaxed font-medium tracking-[0.035em] text-primary">
        <Sprout className="size-3.5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
        A little support can make a meaningful difference.
      </div>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-22 w-full max-w-[1800px] items-center justify-between gap-2 px-6 sm:gap-5 sm:px-10 lg:min-h-24 lg:px-14">
          <Link href="/" aria-label="Marenova Wellness home" className="shrink-0">
            <Image
              src="/images/marenova-logo.svg"
              alt="Marenova Psychiatry & Wellness"
              width={96}
              height={26}
              className="h-auto w-24 min-[375px]:w-[150px] sm:w-[220px]"
              priority
            />
          </Link>
          <NavigationMenu aria-label="Main navigation" className="hidden flex-none min-[1700px]:flex">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.href} value={item.href}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger data-active={pathname === item.href || pathname.startsWith(`${item.href}/`) ? '' : undefined}>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className={cn('w-[360px] p-3', item.children.length > 2 && 'w-[650px]')}>
                        <p className="px-3 pt-2 pb-4 text-base leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                        <ul className={cn('grid gap-1', item.children.length > 2 && 'grid-cols-2')}>
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <NavigationMenuLink
                                render={child.href.startsWith(`${pathname}#`) ? <a href={child.href} /> : <Link href={child.href} />}
                                active={pathname === child.href}
                                closeOnClick
                                className="h-full justify-between gap-4 px-3 py-3"
                              >
                                {child.label}
                                <ArrowUpRight aria-hidden="true" />
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink render={<Link href={item.href} />} closeOnClick className={navigationMenuTriggerStyle()}>
                      {item.label}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-1 sm:gap-3">
            <PracticeAction size="sm" className="px-3 sm:px-6" showArrow={false} />
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger
                render={<Button variant="ghost" size="icon" className="min-[1700px]:hidden" />}
                aria-label="Open navigation menu"
              >
                <Menu aria-hidden="true" />
              </SheetTrigger>
              <SheetContent className="gap-6 overflow-y-auto px-3 py-5">
                <SheetHeader>
                  <SheetTitle>Marenova Wellness</SheetTitle>
                  <SheetDescription>Care that meets you where you are.</SheetDescription>
                </SheetHeader>
                <nav aria-label="Mobile navigation" className="flex flex-col px-4">
                  <Accordion>
                    {navigation.filter((item) => item.children).map((item) => (
                      <AccordionItem key={item.href} value={item.href}>
                        <AccordionTrigger>{item.label}</AccordionTrigger>
                        <AccordionContent className="pr-0">
                          <ul className="flex flex-col gap-1">
                            {item.children?.map((child) => {
                              const Destination = child.href.startsWith(`${pathname}#`) ? 'a' : Link
                              return (
                                <li key={child.href}>
                                  <Destination
                                    href={child.href}
                                    onClick={() => setMenuOpen(false)}
                                    aria-current={pathname === child.href ? 'page' : undefined}
                                    className="flex min-h-11 items-center gap-3 py-2 text-base leading-relaxed font-medium"
                                  >
                                    {child.label}
                                  </Destination>
                                </li>
                              )
                            })}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  {navigation.filter((item) => !item.children).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between gap-3 border-b py-5 text-lg leading-relaxed font-medium"
                    >
                      {item.label}
                      <ArrowUpRight className="size-4 shrink-0 text-secondary-foreground" aria-hidden="true" />
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-3 px-4 pb-4">
                  <PracticeAction onNavigate={() => setMenuOpen(false)} />
                  <PracticeAction type="portal" onNavigate={() => setMenuOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
