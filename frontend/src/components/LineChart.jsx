import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Remove old SVG before drawing new chart
    d3.select(svgRef.current).selectAll('*').remove();

    // Define chart dimensions
    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };

    // Create SVG container
    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Define scales
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1]) // Assuming sessions are indexed
      .range([0, width - margin.left - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, 10]) // Assuming wellbeing values are from 0 to 10
      .range([height - margin.top - margin.bottom, 0]);

    // Define line generator
    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX);

    // Create colors for different wellbeing factors
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    // Draw lines for each wellbeing factor
    const wellbeingFactors = Object.keys(data[0]); // Extract factor names
    wellbeingFactors.forEach((factor, index) => {
      svg
        .append('path')
        .datum(data.map((session) => ({ value: session[factor] })))
        .attr('fill', 'none')
        .attr('stroke', colorScale(index))
        .attr('stroke-width', 2)
        .attr('d', line);
    });

    // X-Axis
    svg
      .append('g')
      .attr('transform', `translate(0, ${height - margin.top - margin.bottom})`)
      .call(d3.axisBottom(xScale).ticks(data.length));

    // Y-Axis
    svg.append('g').call(d3.axisLeft(yScale));
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default LineChart;
