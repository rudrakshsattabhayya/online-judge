# reading files
f1 = open("C:/Users/rudra/Desktop/output1.txt", "r")  
f2 = open("C:/Users/rudra/Desktop/output2.txt", "r")  
  
i = 0
test_case = 0

file1 = f1.read().split("\n")
file2 = f2.read().split("\n")
lines1 = len(file1)
lines2 = len(file2)
lines = min(lines1, lines2)

while i<lines:
    l1 = file1[i]
    l2 = file2[i]
    if l1 == l2 and l1[0:7] == "#Output":
        test_case = l1[7:]
    elif l1 != l2:
        break
    i+=1

if lines1 != lines2:
    if lines1>lines2 and file1[lines][0:7] == "#Output":
        test_case = file1[lines][7:]
    elif lines1<lines2 and file2[lines][0:7] == "#Output":
        test_case = file2[lines][7:]
        

print(test_case)


# closing files
f1.close()                                       
f2.close() 