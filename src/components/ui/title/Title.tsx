import { fontTitle } from "@/config/fonts"

interface Props {
    title: string,
    subtitle?: string,
    className?: string,
}

export const Title = ({ title, subtitle, className }: Props) => {
    return (
        <section className={className}>
            <div className={`${ fontTitle.className } font-semibold antialiased`}>
                {title}
            </div>
            <div className="text-md antialiased font-light">
                {subtitle}
            </div>
        </section>
    )
}
