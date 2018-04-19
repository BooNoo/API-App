//
//  ViewController.swift
//  express-test-app
//
//  Created by Vladimir Mikhaylov on 19.04.2018.
//  Copyright © 2018 Vladimir Mikhaylov. All rights reserved.
//

import UIKit
import RxSwift
import RxAlamofire

class MainViewController: UIViewController, UITableViewDataSource,UITableViewDelegate {

    lazy var tableView: UITableView = {
        var tv = UITableView(frame: .zero, style: .plain)
        tv.translatesAutoresizingMaskIntoConstraints = false
        tv.delegate = self
        tv.dataSource = self
        tv.register(MainCell.self, forCellReuseIdentifier: "MainCellId")
        return tv
    }()
    
    private lazy var refreshControl: UIRefreshControl = {
        var control = UIRefreshControl()
        control.addTarget(self, action: #selector(loadData), for: .valueChanged)
        return control
    }()
    
    struct User: Decodable {
        let id: Int
        let first_name: String
        let last_name: String
    }
    
    
    var data = [User]()
    let disposeBag = DisposeBag()
    override func viewDidLoad() {
        super.viewDidLoad()
        autolayout()
        loadData()
    }
    
    func autolayout() {
        view.addSubview(tableView)
        tableView.refreshControl = refreshControl
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: view.topAnchor, constant: 0),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: 0),
            tableView.leftAnchor.constraint(equalTo: view.leftAnchor, constant: 0),
            tableView.rightAnchor.constraint(equalTo: view.rightAnchor, constant: 0),
            ])
    }
    
    @objc func loadData() {
        RxAlamofire.data(.get, "http://192.168.0.108:3002/user").observeOn(MainScheduler.asyncInstance)
            .subscribe(onNext: { (data) in
                let decoder = JSONDecoder()
                do {
                    self.data = try decoder.decode([User].self, from: data)
                    self.tableView.reloadData()
                    self.refreshControl.endRefreshing()
                } catch let jsonError {
                    print(jsonError)
                }
            })
    }
    
    // MARK: - Table view data source
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.data.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MainCellId", for: indexPath) as! MainCell
        cell.firstName.text = data[indexPath.row].first_name
        cell.lastName.text = data[indexPath.row].last_name
        return cell
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 60
    }
}

