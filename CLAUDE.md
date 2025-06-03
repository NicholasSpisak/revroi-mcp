# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RevROI MCP Server is a Model Context Protocol (MCP) server that provides API endpoints for retrieving discounted gift card options and cashback offers for various retailers.

## API Structure

The server exposes two main endpoints:

1. **Gift Cards API**
   - Endpoint: `/?action=gift_cards&hostname={retailer}`
   - Returns: Array of gift card providers with discount rates

2. **Cashback API**
   - Endpoint: `/?action=cashback&hostname={retailer}`
   - Returns: Cashback offers, travel points, and credit card points

## Current Status

This project is in the initial planning phase with only documentation present:
- `docs/PRD-draft.md` - Contains API endpoint specifications and response examples
- `docs/openapi.yaml` - Empty OpenAPI specification file (to be populated)

## Development Notes

- No technology stack has been chosen yet - consider the MCP server requirements when implementing
- The API responses include proxy information in the response body
- Gift card providers return links to cardbear.com or direct provider links
- Cashback providers include various affiliate links with tracking parameters