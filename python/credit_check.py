def credit_check(string):
    #from last to first, double every other digit
    #sum of digits - on the sum of every other dig
    
    #take sum of all digs
    # modulo of 10 = 0 is true
    
    list_str = list(string)
    
    newlist = []
    summed_dig = []
    int_list =[]
    
    for i in range(0, len(list_str)):
        if i % 2 == 0:
            newlist.append(int(list_str[i]) * 2)
        else:
            newlist.append(list_str[i])
    # print(newlist, 'this is newlist')
    for j in newlist:
        if isinstance(j, int):
            if j >= 10:
                new_j = list(str(j))
                sum_dig = int(new_j[0]) + int(new_j[1])
                summed_dig.append(sum_dig)
            else:
                summed_dig.append(j)
        else:
            summed_dig.append(j)
    # print(summed_dig, 'this is summed_dig')
    for x in summed_dig:
        numbers = int(x)
        int_list.append(numbers)
    
    
    if sum(int_list) % 10 == 0:
        return 'The number is valid!'
    else:
        return 'The number is invalid!'
    
    
        


# print(credit_check('5541808923795240'))
# print(credit_check('5541801923795240'))