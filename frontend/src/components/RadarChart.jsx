import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const RadarChart = ({ data }) => {
	const svgRef = useRef();

	useEffect(() => {
		// Clear any previous content
		d3.select(svgRef.current).selectAll('*').remove();

		const width = 280;
		const height = 280;
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

		// Draw circular grid lines (keep as is or adjust if needed)
		const axisGrid = svg.append('g').attr('class', 'axisWrapper');
		for (let i = 1; i <= levels; i++) {
			axisGrid
				.append('circle')
				.attr('r', (radius / levels) * i)
				.style('fill', 'none')
				.style('stroke', '#000000')
				.style('stroke-opacity', 0.3);
		}

		// Draw axes and labels (using black for contrast)
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
			.style('stroke', '#000000')
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
			.style('font-size', '9px')
			.style('fill', '#000000')
			.text((d) => d.axis);

		// Draw the radar shape with light pink fill and red connecting lines
		const line = d3
			.lineRadial()
			.radius((d) => (d.value / 10) * radius)
			.angle((d, i) => i * angleSlice)
			.curve(d3.curveLinearClosed);

		svg
			.append('path')
			.datum(data)
			.attr('d', line)
			.style('fill', 'rgba(255,182,193,0.3)') // light pink fill
			.style('stroke', 'red') // red stroke between categories
			.style('stroke-width', 2);

		// Add circles for each data point
		svg
			.selectAll('.data-point')
			.data(data)
			.enter()
			.append('circle')
			.attr('class', 'data-point')
			.attr(
				'cx',
				(d, i) =>
					Math.cos(angleSlice * i - Math.PI / 2) * ((d.value / 10) * radius)
			)
			.attr(
				'cy',
				(d, i) =>
					Math.sin(angleSlice * i - Math.PI / 2) * ((d.value / 10) * radius)
			)
			.attr('r', 4)
			.style('fill', 'blue')
			.style('stroke', '#000000');

		// Add text labels next to each data point showing the score
		svg
			.selectAll('.data-label')
			.data(data)
			.enter()
			.append('text')
			.attr('class', 'data-label')
			.attr('x', (d, i) => {
				const cx =
					Math.cos(angleSlice * i - Math.PI / 2) * ((d.value / 10) * radius);
				return cx + (cx >= 0 ? 10 : -10);
			})
			.attr('y', (d, i) => {
				const cy =
					Math.sin(angleSlice * i - Math.PI / 2) * ((d.value / 10) * radius);
				return cy + 5;
			})
			.attr('text-anchor', (d, i) => {
				const cx =
					Math.cos(angleSlice * i - Math.PI / 2) * ((d.value / 10) * radius);
				return cx >= 0 ? 'start' : 'end';
			})
			.text((d) => d.value)
			.attr('fill', '#000000')
			.attr('font-size', '12px');
	}, [data]);

	return <svg ref={svgRef} className="mx-auto"></svg>;
};

export default RadarChart;
