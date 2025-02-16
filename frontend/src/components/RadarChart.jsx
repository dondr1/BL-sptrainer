import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const RadarChart = ({ data }) => {
const svgRef = useRef();

useEffect(() => {
    // Remove existing SVG before re-rendering
    d3.select(svgRef.current).selectAll('*').remove();

    // Chart dimensions
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2 - 50;
    const levels = 5; // Number of concentric circles
    const angleSlice = (Math.PI * 2) / data.length;

    // Create SVG
    const svg = d3
    .select(svgRef.current)
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Radar Chart Background (Concentric Circles)
    const axisGrid = svg.append('g').attr('class', 'axisWrapper');
    for (let i = 1; i <= levels; i++) {
        axisGrid
          .append('circle')
          .attr('r', (radius / levels) * i)
          .style('fill', 'none')
          .style('stroke', '#000000')
          .style('stroke-opacity', 0.5);
    }

    // Axes
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

    // Axis Labels
    axes
    .append('text')
    .attr(
        'x',
        (d, i) => Math.cos(angleSlice * i - Math.PI / 2) * (radius + 20)
    )
    .attr(
        'y',
        (d, i) => Math.sin(angleSlice * i - Math.PI / 2) * (radius + 20)
    )
    .attr('text-anchor', 'middle')
    .style('font-size', '12px')
    .style('fill', '#000')
    .text((d) => d.axis);

    // Data Line Generator
    const line = d3
    .lineRadial()
    .radius((d) => (d.value / 10) * radius) // Scale values to fit within radar
    .angle((d, i) => i * angleSlice);

    // Draw Data Shape
    svg
    .append('path')
    .datum(data)
    .attr('d', line)
    .style('fill', 'rgba(0, 100, 255, 0.3)')
    .style('stroke', 'blue')
    .style('stroke-width', 2);
    }, [data]);

    return <svg ref={svgRef}></svg>;
};

export default RadarChart;
