import winston from "winston";
const logFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level}] : ${message}`;
  })
);

const logger = winston.createLogger({
  level: "info",
  format: logFormat,
  transports: [new winston.transports.Console()],
});

export default logger;
