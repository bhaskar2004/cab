"use client"

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'
import { useTransition } from 'react'

export function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()

    const toggleLanguage = () => {
        const newLocale = locale === 'en' ? 'kn' : 'en'

        startTransition(() => {
            router.replace(pathname, { locale: newLocale as 'en' | 'kn' })
        })
    }

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            disabled={isPending}
            className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/10 bg-transparent font-semibold disabled:opacity-50"
            aria-label="Switch language"
        >
            <Languages className="w-4 h-4 text-blue-400" />
            <span className="text-xs uppercase tracking-wider">
                {locale === 'en' ? 'ಕನ್ನಡ' : 'EN'}
            </span>
        </Button>
    )
}
