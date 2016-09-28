insert into user(id,email,last_name,first_name) values(1,'suzuki-taro@aaa.com','鈴木','太郎');
insert into user(id,email,last_name,first_name) values(2,'tanaka-jiro@bbb.com','田中','次郎');
insert into todo(id,code,todo,complete,limit_date,user_id,version) values(1,'TODO_0001','仕事をする',false,'2016-10-01 00:00:00',1,0);
insert into todo(id,code,todo,complete,limit_date,user_id,version) values(2,'TODO_0002','家事をする',false,'2016-10-01 00:00:00',2,0);
insert into sequence(table_name,sequence_no) values('TODO',3);
insert into sequence(table_name,sequence_no) values('USER',3);