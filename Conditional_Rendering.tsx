    export function SimpleCondition() {
    let a = "Hello";
    // && acts like a ternary operator
        return (
        <>
        {a === "Hello" && <p>Hello Found!</p>}
        </>
    );
    }