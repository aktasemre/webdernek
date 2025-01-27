public class ResponseMessage<T> {
    private String message;
    private boolean success;
    private T response;
    
    private int httpStatus;
    private String timestamp = Instant.now().toString();

    public static <T> ResponseMessage<T> error(String message) {
        return ResponseMessage.<T>builder()
                .message(message)
                .success(false)
                .status(HttpStatus.BAD_REQUEST.value())
                .build();
    }
} 