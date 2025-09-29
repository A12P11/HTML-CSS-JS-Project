
**For the submission**: Make sure the file is named `CONTRIBUTING.md` and contains the necessary information.

---

### **Task 6: The file simple-interest.sh is present in the repository. (2 pts)**

- **What to do**: Add the `simple-interest.sh` script file.

**Steps**:
1. Create a file called `simple-interest.sh` in your repository.
2. Add a basic shell script that calculates simple interest. Here's an example of what it could look like:

```bash
#!/bin/bash

# Simple Interest Calculation
# Formula: SI = (P * R * T) / 100

echo "Enter Principal Amount:"
read P
echo "Enter Rate of Interest (in %):"
read R
echo "Enter Time Period (in years):"
read T

SI=$(( (P * R * T) / 100 ))

echo "The Simple Interest is: $SI"
