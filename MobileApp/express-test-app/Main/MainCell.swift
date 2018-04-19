//
//  StockDefaultTableViewCell.swift
//  coffeMachine_app
//
//  Created by Vladimir Mikhaylov on 14.06.17.
//  Copyright © 2017 Vladimir Mikhaylov. All rights reserved.
//

import UIKit

class MainCell: UITableViewCell {
    
    let firstName: UILabel = {
        var label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    let lastName: UILabel = {
        var label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    override init(style: UITableViewCellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        setupLayout()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func setupLayout() {
        addSubview(firstName)
        addSubview(lastName)
        
        NSLayoutConstraint.activate([
            firstName.heightAnchor.constraint(equalToConstant: 20),
            firstName.topAnchor.constraint(equalTo: topAnchor, constant: 8),
            firstName.leftAnchor.constraint(equalTo: leftAnchor, constant: 8),
            firstName.rightAnchor.constraint(equalTo: rightAnchor, constant: -8),
            
            lastName.heightAnchor.constraint(equalToConstant: 20),
            lastName.topAnchor.constraint(equalTo: firstName.bottomAnchor, constant: 8),
            lastName.leftAnchor.constraint(equalTo: leftAnchor, constant: 8),
            lastName.rightAnchor.constraint(equalTo: rightAnchor, constant: -8),
            ])
    }
}
