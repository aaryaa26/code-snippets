# palindrome.py
# Simple Python program to check if a string or number is a palindrome

def is_palindrome(s):
    # Convert input to string
    s = str(s)
    # Remove spaces and make lowercase
    s = ''.join(c.lower() for c in s if c.isalnum())
    # Compare string with its reverse
    return s == s[::-1]


# ---- Main program ----
if __name__ == "__main__":
    text = input("Enter a string or number: ")
    
    if is_palindrome(text):
        print("✅ It's a palindrome!")
    else:
        print("❌ Not a palindrome.")
