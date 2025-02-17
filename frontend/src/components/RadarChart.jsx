import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const RadarChart = ({ data }) => {
	const svgRef = useRef();

	useEffect(() => {
		d3.select(svgRef.current).selectAll('*').remove();

		const width = 500; // Reduced from 400
		const height = 500; // Reduced from 400
		const radius = Math.min(width, height) / 2 - 40;
		const levels = 5;
		const angleSlice = (Math.PI * 2) / data.length;

		const svg = d3
			.select(svgRef.current)
			.attr('width', width)
			.attr('height', height)
			.style('display', 'block')
			.append('g')
			.attr('transform', `translate(${width / 2}, ${height / 2})`);

		const axisGrid = svg.append('g').attr('class', 'axisWrapper');
		for (let i = 1; i <= levels; i++) {
			axisGrid
				.append('circle')
				.attr('r', (radius / levels) * i)
				.style('fill', 'none')
				.style('stroke', '#ffffff')
				.style('stroke-opacity', 0.3);
		}

		const axes = svg
			.selectAll('.axis')
			.data(data)
			.enter()
			.append('g')
			.attr('class', 'axis');

		axes
			.append('line')
			.attr('x1', 0)
			.attr('y1', 0)
			.attr('x2', (d, i) => Math.cos(angleSlice * i - Math.PI / 2) * radius)
			.attr('y2', (d, i) => Math.sin(angleSlice * i - Math.PI / 2) * radius)
			.style('stroke', '#ffffff')
			.style('stroke-width', '1px');

		axes
			.append('text')
			.attr('x', (d, i) => {
				if (d.axis === 'Risk Assessment') {
					return Math.cos(angleSlice * i - Math.PI / 2) * radius;
				} else if (d.axis === 'Resource Referral') {
					return Math.cos(angleSlice * i - Math.PI / 2) * (radius - 1.3);
				}
				return Math.cos(angleSlice * i - Math.PI / 2) * (radius + 20);
			})
			.attr(
				'y',
				(d, i) => Math.sin(angleSlice * i - Math.PI / 2) * (radius + 20)
			)
			.attr('text-anchor', 'middle')
			.style('font-size', '12px')
			.style('fill', '#ffffff')
			.text((d) => d.axis);

		// **Fix: Ensure the Radar Shape Closes Properly**
		const line = d3
			.lineRadial()
			.radius((d) => (d.value / 10) * radius)
			.angle((d, i) => i * angleSlice)
			.curve(d3.curveLinearClosed); // <--- Ensures last point connects to first

		svg
			.append('path')
			.datum(data)
			.attr('d', line)
			.style('fill', 'rgba(0, 100, 255, 0.3)')
			.style('stroke', 'blue')
			.style('stroke-width', 2);
	}, [data]);

	return <svg ref={svgRef} className="mx-auto"></svg>;
};

export default RadarChart;
