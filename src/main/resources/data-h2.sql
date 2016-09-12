insert into user(id,email,last_name,first_name) values(1,'suzuki-taro@aaa.com','鈴木','太郎');
insert into user(id,email,last_name,first_name) values(2,'tanaka-jiro@bbb.com','田中','次郎');
insert into todo(id,code,todo,complete,limit_date,user_id) values(1,'TODO_0001','仕事をする',false,'2016-10-01 00:00:00',1);
insert into todo(id,code,todo,complete,limit_date,user_id) values(2,'TODO_0002','家事をする',false,'2016-10-01 00:00:00',2);
insert into sequence(id,table_name,sequence_no) values('TODO','TODO',3);
insert into sequence(id,table_name,sequence_no) values('USER','USER',3);