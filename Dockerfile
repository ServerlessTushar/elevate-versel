FROM node:20

WORKDIR /app
COPY package*.json ./
RUN npm install

ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL

COPY . .
# COPY .env .env
ENV NODE_ENV=production

RUN npm run build

# Expose the port your Next.js app listens on
EXPOSE 3000

# Start your Next.js app
CMD ["npm", "start"]