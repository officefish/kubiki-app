import { FC } from "react"

interface ISVGHeaderProps {
    width: number
    height: number
    value: string
}

const SVGHeader: FC<ISVGHeaderProps> = (props) => {
    const { width, height, value } = props
    return <svg className="svg-header" viewBox={`0 0 ${width} ${height}`}>
	<symbol id="s-text">
		<text text-anchor="middle" x="50%" y="80%">{value}</text>
  
	</symbol>

	<g className = "g-ants">
		<use xlinkHref="#s-text" className="text-copy"></use>
		<use xlinkHref="#s-text" className="text-copy"></use>
		<use xlinkHref="#s-text" className="text-copy"></use>
		<use xlinkHref="#s-text" className="text-copy"></use>
		<use xlinkHref="#s-text" className="text-copy"></use>
	</g>
</svg>
}
export default SVGHeader